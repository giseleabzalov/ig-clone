import { Image, Text, View, StyleSheet } from 'react-native';

export default function Posts({ post }) {
    return (
        <View style={StyleSheet.post}>
            <Image style={styles.image} source={{ uri:post.photo }} />
            <Text style={styles.title}>{post.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
    },
    image: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
        height: 300,
    },
    title: {
        fontSize: 20,
    },
})