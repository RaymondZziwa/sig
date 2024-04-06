import { StyleSheet } from "react-native";


export const ScreenHeader = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    Logo: {
        height: 50,
        width: 50
    },
    Notification: {
        height: 30,
        width: 30,
        margin: 10
    }
});

export const BlueBoard = StyleSheet.create({
    Container: {
        backgroundColor: '#184677',
        margin: 10,
        borderRadius: 5,
        height: 300
    },

    TopButtonWrapper: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 10
    },

    BalanceButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#474749',
    },

    BalanceButtonText: {
        color: '#474749',
        textAlign: 'center',
        fontSize: 16,
        padding: 10
    },

    IntelligentButton: {
        backgroundColor: '#1d4b6f',
        borderRadius: 20,
        marginLeft: 10
    },

    IntelligentButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        padding: 10
    },


    InitWrapper: {
        flexDirection: 'row',
        marginBottom: 20
    },

    InfoPercentage: {
        paddingLeft: 20,
        color: '#50545e',
    },

    InfoId: {
        color: 'white'
    },

    InfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    AmountWrapper: {
        backgroundColor: '#28558e',
        borderRadius: 8,
        padding: 20
    },

    OrderAmountWrapper: {
        backgroundColor: '#294584',
        borderRadius: 8,
        padding: 20
    },

    SubHeaders: {
        color: '#86aed9'
    },

    TodayEarnings: {
        color: 'white',
        fontSize: 30
    },

    OrderAmount: {
        color: 'white',
        fontSize: 30
    },

    AccountBalanceHeaders: {
        color: '#86aed9'
    },

    Digits: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },

    ABWrapper: {
        padding:16
    }
})

export const ButtonSection = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    ButtonWrapper: {
        backgroundColor: '#202125',
        padding: 15,
        borderRadius: 8
    },

    ButtonStyles: {
        fontSize: 20,
        color: 'white',
    }
})

export const TopCombination = StyleSheet.create({
    Container: {
        backgroundColor: '#202125',
        marginTop: 15,
        height: 500
    },

    HeaderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    Header: {
        color: 'white',
        padding: 12,
        fontSize: 25,
        fontWeight: 'bold'
    },

    More: {
        color: '#50545e',
        padding: 15,
        fontSize: 15,
    },

    CurrencyTab: {
        marginTop: 10,
        padding: 10,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    Currency: {
        color: 'white',
        fontSize: 18,
    },

    SubCurrency: {
        color: '#50545e',
        fontSize: 12,
    },

    Digits: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    SubDigits: {
        color: '#50545e',
        textAlign: 'center'
    },

})