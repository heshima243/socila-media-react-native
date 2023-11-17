import { Axios } from "axios";
import { Center, ScrollView } from "native-base";
import React from "react";
import { Button, TouchableOpacity, View } from "react-native";
import IsLoadings from "./loading/IsLoadings";
import Usefetch from "../UseFetch";
import MapArticle from "./MapArticle";

const Article = ({ navigation }) => {
  const {
    data: articles,
    Isloading,
    error,
  } = Usefetch(
    "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=8069d1a821a75dd10211cdba7f3a7117julio"
  );

  if (Isloading) {
    return (
      <ScrollView>
        {[...Array(10).keys()].map((index) => (
          <Center key={index} flex={1} px="3">
            <IsLoadings />
          </Center>
        ))}
      </ScrollView>
    );
  }

  const handleArticlePress = (article) => {
    navigation.navigate("ReadArticle", { article });
  };

  return (
    <ScrollView>
      {articles &&
        articles.map((article, index) => (
          <TouchableOpacity onPress={() => handleArticlePress(article)}>
            <MapArticle article={article} key={index} />
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default Article;
