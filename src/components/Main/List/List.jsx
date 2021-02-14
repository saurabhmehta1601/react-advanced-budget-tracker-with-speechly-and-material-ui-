import React,{useContext} from 'react'
import {ExpenseTrackerContext} from '../../../context/context'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import {Delete , MoneyOff} from '@material-ui/icons'
import useStyles from './styles'

const List = () => {

    const {deleteTransaction} =useContext(ExpenseTrackerContext)

    const classes = useStyles()
    const transactions=[{id:1,type:"Income",category:"bussiness",amount:50,date:new Date().toLocaleString()},{id:2,type:"Expense",category:"pet",amount:50,date:new Date().toLocaleString()},{id:3,type:"Income",category:"salary",amount:50,date:new Date().toLocaleString()}]

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=> (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type==="Income" ? classes.avatarIncome:classes.avatarExpense}>
                         <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ) )}
        </MUIList>
    )
}

export default List
