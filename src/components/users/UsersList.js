import Card from "../ui/Card";

import css from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={css.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
