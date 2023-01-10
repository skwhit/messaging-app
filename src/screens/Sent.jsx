import { MessageList, ScreenHeader } from "../components";
import { SafeAreaWrapper } from "../components";

const Sent = () => {
  return (
    <SafeAreaWrapper>
      <ScreenHeader title="Sent" />
      <MessageList parent="Sent" />
    </SafeAreaWrapper>
  );
};

export default Sent;
