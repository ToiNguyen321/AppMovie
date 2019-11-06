import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview';
import { colors, sizeText, fonts } from '../../../common/Custom';
import BoxMovieByCategory from './BoxMovieByCategory';
const data = [
    { id: 1, name: "In Theatres" },
    { id: 2, name: "Popular" },
    { id: 3, name: "Recent" },
    { id: 4, name: "Soon" },
    { id: 5, name: "Fan Favorites" },
]
export default class MovieByCategory extends PureComponent {
    state = {
        tabActive: 0
    }
    render() {
        return (
            <ScrollableTabView
                style={{ marginTop: 20,}}
                tabBarBackgroundColor={'transparent'}
                tabBarTextStyle={{ fontSize: sizeText.textButton, fontFamily: fonts.Bahij_TheSansArabic_SemiBold }}
                tabBarInactiveTextColor={colors.text2}
                tabBarActiveTextColor={colors.text1}
                scrollWithoutAnimation={false}
                renderTabBar={() => <ScrollableTabBar />}
                ref={(tabView) => { this.tabView = tabView; }}
                tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
                showsHorizontalScrollIndicator={false}
                locked={true}
            >
                {
                    data.map(item => <BoxMovieByCategory navigation={this.props.navigation} key={item.id.toString()} tabLabel={item.name} />)
                }
            </ScrollableTabView>
        )
    }
}