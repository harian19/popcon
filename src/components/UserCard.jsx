import * as React from 'react';
import UserType from "./UserType";
import { CardContainerWithHeader } from "./ReviewCard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function UserCard () {
    return (
        <CardContainerWithHeader title="Profile" icon = {<AccountCircleIcon/>}>
            <UserType/>
        </CardContainerWithHeader>
    );
}