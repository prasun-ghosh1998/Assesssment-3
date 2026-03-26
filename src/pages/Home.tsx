import { Select, MenuItem, Box, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/api";


const Home = () => {
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log("DATA:", data);

  const [sort, setSort] = useState("");

  const sortedData = [...data].sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Products
      </Typography>

      
      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        sx={{ mb: 3, minWidth: 200 }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="price">Sort by Price</MenuItem>
        <MenuItem value="name">Sort by Name</MenuItem>
      </Select>

      
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="flex-start"
      >
        {sortedData.map((product) => (
          <Box
            key={product.id}
            sx={{
              width: "23%",  
              minWidth: "250px",
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;