import { Button, Icon, ListItem, Text } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'

export default function About() {
    return (
        <View style={{ marginTop: 40 }}>
            <Text>This is About Page</Text>
            <Button color={'blue'} title={'outline'} width={20}>Register</Button>

            <Button
                buttonStyle={{ width: 125 }}
                containerStyle={{ margin: 5 }}
                disabledStyle={{
                    borderWidth: 2,
                    borderColor: "#00F"
                }}
                disabledTitleStyle={{ color: "#00F" }}

                icon={
                    <Icon name="translate" size={15} color="#0FF" />
                }
                iconContainerStyle={{ background: "#000" }}

                loadingStyle={{}}

                title="Languages"
                titleProps={{}}
                titleStyle={{ marginHorizontal: 5 }}
            />
            <ListItem>
                <Icon name='person'/>
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <Text h4 style={{margin:10, padding: 5}}>Amharic</Text>
            <Text h4 style={{ margin: 10, padding: 5 }}>Tigrigan</Text>
            <Text h4 style={{ margin: 10, padding: 5 }}>Hadiya</Text>
        </View>
    )
}
