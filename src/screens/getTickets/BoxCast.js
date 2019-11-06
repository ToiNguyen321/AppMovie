import React from 'react';
import { Text, View } from 'react-native';
import BoxMovie from '../../components/BoxMovie';
import ItemBoxCast from '../../components/ItemBoxCast';
const data = [
    { id: 1, name: "Joaquin Phoenix", nameInFilm: 'The Joker', image: require('../../assets/images/cast/cast1.png') },
    { id: 2, name: "Zazie Beetz", nameInFilm: 'Sophie Dumond', image: require('../../assets/images/cast/cast2.png') },
    { id: 3, name: "Robert De Niro", nameInFilm: 'Murray Franklin', image: require('../../assets/images/cast/cast3.png') },
    { id: 4, name: "Frances Conroy", nameInFilm: 'Penny Fleck', image: require('../../assets/images/cast/cast4.png') },
    { id: 5, name: "Fan Favorites", nameInFilm: 'Penny Fleck', image: require('../../assets/images/cast/cast5.png') },
]
const BoxCast = ({
    params,
}) => (
    <BoxMovie
        title={"Cast"}
        seeAll={false}
        marginTop={20}
    >
        {
            data.map((item, index) => <ItemBoxCast length={data.length} index={index} key={item.id} item={item} />)
        }
    </BoxMovie>
);

export default BoxCast;
