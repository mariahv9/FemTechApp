import { Paper } from '@mui/material';

function Item({item}) {
    return (
        <Paper>
            <img src={item.image} alt='banner'/>
        </Paper>
    )
}

export default Item;