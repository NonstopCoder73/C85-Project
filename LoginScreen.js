import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LoadingScreen extends Component {
    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behaviour: "web",
                androidClientId: "364215052414-ccs421ktokff4s9gucddimvcvbaub53k.apps.googleusercontent.com",
                iosClientId:
                    "364215052414-rl7dbpnumvurgoifbmrg0sqlnk5pp27t.apps.googleusercontent.com",
                scopes: ["profile", "email"]
            });
        }
    }
}
