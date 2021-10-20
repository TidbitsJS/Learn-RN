import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import BookInfoSection from "../components/BookInfoSection";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import BookDescription from "../components/BookDescription";

const BookDetail = ({ route, navigation }) => {
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
          {book && <BookInfoSection book={book} navigation={navigation} />}
          {book && <BookDescription description={book.description} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
