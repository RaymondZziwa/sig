import { View, Text, TouchableOpacity, Image } from "react-native"
import { BlueBoard, ButtonSection, ScreenHeader, TopCombination } from "./styled-components"
import React from "react"

const HomeScreen = () => {


    return(
        <>
            <View style={ScreenHeader.Container}>
                <Image source={require('./assets/momo-logo.png')} style={ScreenHeader.Logo} />
                <TouchableOpacity>
                        <Image source={require('./assets/bell-solid.png')} style={ScreenHeader.Notification}/>
                </TouchableOpacity>
            </View>
            <View style={BlueBoard.Container}>
                <View style={BlueBoard.TopButtonWrapper}>
                    <TouchableOpacity>
                        <View style={BlueBoard.BalanceButton}>
                            <Text style={BlueBoard.BalanceButtonText}>Balance</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={BlueBoard.IntelligentButton}>
                            <Text style={BlueBoard.IntelligentButtonText}>Intelligent AI Trading</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={BlueBoard.InitWrapper}>
                    <View style={BlueBoard.ABWrapper}>
                        <Text style={BlueBoard.AccountBalanceHeaders}>Account Balance</Text>
                        <Text style={BlueBoard.Digits}>$83,000,989</Text>
                    </View>
                    <View style={BlueBoard.ABWrapper}>
                        <Text style={BlueBoard.AccountBalanceHeaders}>Today, 2024/04/06</Text>
                    </View>
                </View>
                <View style={BlueBoard.InitWrapper}>
                    <Text style={BlueBoard.InfoPercentage}>0.00%</Text>
                    <Text style={BlueBoard.InfoId}>UID1186023</Text>
                </View>
                <View style={BlueBoard.InfoWrapper}>
                    <View style={BlueBoard.AmountWrapper}>
                        <Text style={BlueBoard.SubHeaders}>Today's earnings</Text>
                        <Text style={BlueBoard.TodayEarnings}>$0.00</Text>
                    </View>

                    <View style={BlueBoard.OrderAmountWrapper}>
                        <Text style={BlueBoard.SubHeaders} >Order Amounts</Text>
                        <Text style={BlueBoard.OrderAmount} >0.00</Text>
                    </View>
                </View>
            </View>

            <View style={ButtonSection.Container}>
                <TouchableOpacity style={ButtonSection.ButtonWrapper}>
                    <View>
                        <Text style={ButtonSection.ButtonStyles}>Loan</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={ButtonSection.ButtonWrapper}>
                    <View>
                        <Text style={ButtonSection.ButtonStyles}>Deposit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={ButtonSection.ButtonWrapper}>
                    <View>
                        <Text style={ButtonSection.ButtonStyles}>Withdraw</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={TopCombination.Container}>
                <View style={TopCombination.HeaderWrapper}>
                    <Text style={TopCombination.Header}>TOP Combination</Text>
                    <TouchableOpacity>
                        <View>
                            <Text style={TopCombination.More}>More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={TopCombination.CurrencyTab}>
                    <View>
                        <Text style={TopCombination.Currency}>XAU/USD</Text>
                        <Text style={TopCombination.SubCurrency}>XAU</Text>
                    </View>
                    <View>
                        <Image source={require('./assets/g1.png')}  style={{width: 80, height: 60}} alt='graph'/>
                    </View>
                    <View>
                        <Text style={TopCombination.Digits}>2000001.00</Text>
                        <Text style={TopCombination.SubDigits}>NaN%</Text>
                    </View>
                </View>
                <View style={TopCombination.CurrencyTab}>
                    <View>
                        <Text style={TopCombination.Currency}>CL/USDT</Text>
                        <Text style={TopCombination.SubCurrency}>CL</Text>
                    </View>
                    <View>
                        <Image source={require('./assets/g2.png')}  style={{width: 80, height: 60}} alt='graph'/>
                    </View>
                    <View>
                        <Text style={TopCombination.Digits}>73.982</Text>
                        <Text style={TopCombination.SubDigits}>+0.10%</Text>
                    </View>
                </View>
                <View style={TopCombination.CurrencyTab}>
                    <View>
                        <Text style={TopCombination.Currency}>JPY/USD</Text>
                        <Text style={TopCombination.SubCurrency}>JPY/USD</Text>
                    </View>
                    <View>
                        <Image source={require('./assets/g1.png')}  style={{width: 80, height: 60}} alt='graph'/>
                    </View>
                    <View>
                        <Text style={TopCombination.Digits}>0.006824</Text>
                        <Text style={TopCombination.SubDigits}>0.03%</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default HomeScreen