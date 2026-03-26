import {
  Table, TableBody, TableCell,
  TableHead, TableRow, Button, TextField
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import { useAppDispatch, useAppSeletor } from "../service/helper/redux";

const Cart = () => {
  const { items } = useAppSeletor(state => state.cart);
  const dispatch = useAppDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item:any) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.price}</TableCell>

              <TableCell>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(updateQuantity({
                      id: item.id,
                      quantity: +e.target.value
                    }))
                  }
                />
              </TableCell>

              <TableCell>{item.price * item.quantity}</TableCell>

              <TableCell>
                <Button
                  color="error"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Total: ₹ {total.toFixed(2)}</h2>
    </>
  );
};

export default Cart;