

/* Api response:model
"user": {
    "full_name": "Julian Puyo",
    "email": "manager@example.com",
    "is_staff": true
}
*/

export default interface User {
    full_name: string;
    email: string;
    is_staff: boolean;
}