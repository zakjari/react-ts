import { FC } from "react";
type GreetingProps = {
    name: string;
  };
  
  const Greeting: FC<GreetingProps> = ({ name }) => <div>Hello, {name}!</div>;
  export default Greeting;