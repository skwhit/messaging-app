import { MessageList, ScreenHeader } from "../components";
import { SafeAreaView } from "react-native";
import { SafeAreaWrapper } from "../components";

const Inbox = () => {
  
  return (
    <SafeAreaWrapper>
      <ScreenHeader title={"Inbox"} />
      <MessageList parent="Inbox" />
    </SafeAreaWrapper>
  );
};

export default Inbox;
