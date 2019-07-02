import React from "react";
import {
  createDrawerNavigator,
  SafeAreaView,
  DrawerItems
} from "react-navigation";

import Home from "./Overview";
import Logout from "./Auth";
import Analytics from "../screens/Analytics";
import Chat from "../screens/Chat";
import Service from "../screens/Service";
import Settings from "../screens/Settings";
import Map from "../screens/Map";
import Vehicles from "../screens/Vehicles";
import * as theme from "../constants/theme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { StyleSheet } from "react-native";

import {
  Content,
  View,
  Card,
  CardItem,
  Grid,
  Col,
  Thumbnail,
  Text,
  Button,
  Icon
} from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const iconsMap = new Map([["Home", "home"], ["Logout", "logout"]]);

const customDrawerComponent = props => {
  return (
    <Content>
      <SafeAreaView>
        <View style={{ height: 100, backgroundColor: "white" }}>
          <Card transparent>
            <CardItem>
              <Grid>
                <Col size={25} style={{ marginRight: 10 }}>
                  <Thumbnail
                    source={{
                      uri:
                        "https://avatars1.githubusercontent.com/u/17190913?s=460&v=4"
                    }}
                  />
                </Col>
                <Col size={75}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      Mohammed Ismail
                    </Text>
                    <Text note small>
                      Software Engineer
                    </Text>
                  </View>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </View>
        <ScrollView>
          <DrawerItems
            {...props}
            getLabel={scene => (
              <View style={styles.item}>
                <View style={styles.iconContainer}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name={
                      props.getLabel(scene) === "Home"
                        ? "home"
                        : props.getLabel(scene).toLowerCase()
                    }
                    style={styles.icon}
                  />
                </View>
                <Text style={styles.label}>{props.getLabel(scene)}</Text>
              </View>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </Content>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    margin: 14,
    fontWeight: "bold"
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: "center"
  },
  icon: {
    fontSize: 22
  }
});

export default createDrawerNavigator(
  {
    Home,
    Logout
  },
  {
    contentOptions: {
      activeBackgroundColor: "#f3f4f591",
      activeTintColor: theme.colors.lightblue
    },
    contentComponent: customDrawerComponent
  }
);
