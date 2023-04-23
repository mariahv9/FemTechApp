import { Paper } from '@mui/material';

function Item({item}) {
    return (
        <Paper>
            <img height={300} width={1300} src={item.image} alt='banner'/>
        </Paper>
    )
}

export default Item;