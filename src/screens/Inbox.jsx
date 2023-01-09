import { MessageList, ScreenHeader } from "../components";

const Inbox = () => {
  
  return (
    <>
      <ScreenHeader title={"Inbox"} />
      <MessageList parent="Inbox" />
    </>
  );
};

export default Inbox;
