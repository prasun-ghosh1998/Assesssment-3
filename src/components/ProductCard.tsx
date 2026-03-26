import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import {  IndianRupee, Star } from "lucide-react";

const ProductCard = ({ product }:any) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent>
        <img src={product.image} height="120" />
        <Typography>{product.title}</Typography>
        <Box sx={{display:"flex",alignItems:"center", gap:"5px"}}>
            <IndianRupee />
        <Typography>{product.price}</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center", gap:"5px"}}>
            <Star />
        <Typography>{product.rating.rate}</Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;