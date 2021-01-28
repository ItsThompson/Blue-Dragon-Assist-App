import AsyncStorage from "@react-native-async-storage/async-storage";

let lang = null;

const getLanguage = async () => {
    try {
        const value = await AsyncStorage.getItem("@lang");
        if (value !== null) {
            console.log("chosenlanguage.js");
            console.log(value);
            lang = value;
            return;
        }
    } catch (e) {
        // error reading value
    }
};

const setLanguage = async (chosenlanguage) => {
    try {
        await AsyncStorage.setItem("@lang", chosenlanguage);
        getLanguage();
    } catch (e) {
        // saving error
    }
};

getLanguage();

export { lang, setLanguage };
