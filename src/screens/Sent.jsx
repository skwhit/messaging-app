import { MessageList, ScreenHeader } from "../components";
import { SafeAreaWrapper } from "../components";

//Sent screen component for list of sent messages
const Sent = () => {
  return (
    <SafeAreaWrapper>
      <ScreenHeader title="Sent" />
      <MessageList parent="Sent" />
    </SafeAreaWrapper>
  );
};

export default Sent;
