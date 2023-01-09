import { MessageList, ScreenHeader } from "../components";

const Sent = () => {
 
  return (
    <>
      <ScreenHeader title={"Sent"} />
      <MessageList  parent="Sent" />
    </>
  );
};

export default Sent;
