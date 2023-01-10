import { MessageList, ScreenHeader } from "../components";
import { SafeAreaWrapper } from "../components";

//Inbox screen component for list of received messages
const Inbox = () => {
  return (
    <SafeAreaWrapper>
      <ScreenHeader title="Inbox" />
      <MessageList parent="Inbox" />
    </SafeAreaWrapper>
  );
};

export default Inbox;
