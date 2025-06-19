import { View, Text, TextInput } from "react-native";
import { commonStyles } from "@/styles/common.style";
import { windowHeight, windowWidth } from "@/themes/app.constant";
import { external } from "@/styles/external.style";
import styles from "@/screens/login/styles";
import color from "@/themes/app.colors";
import SelectInput from "../common/select-input";
import { useState } from "react";
import { countryItems } from "@/configs/country-list";

export default function PhoneNumberInput({ width }: any) {
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <View style={{ width: width }}>
      <Text
        style={[commonStyles.mediumTextBlack, { marginTop: windowHeight(8) }]}
      >
        Phone Number
      </Text>

      <View style={[external.mt_5]}>
        {/* Country Code */}
        <View
          style={[
            styles.countryCodeContainer,
            {
              borderColor: color.border,
              marginBottom: windowHeight(10),
            },
          ]}
        >
          <SelectInput
            title="+91"
            placeholder="Select country code"
            value={countryCode}
            onValueChange={(text) => setCountryCode(text)}
            showWarning={false}
            warning="Please select a country code"
            items={countryItems}
          />
        </View>

        {/* Phone Number Input */}
        <View style={styles.phoneNumberInput}>
          <TextInput
            style={[commonStyles.regularText]}
            placeholderTextColor={color.subtitle}
            placeholder="Enter your number"
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
      </View>
    </View>
  );
}
