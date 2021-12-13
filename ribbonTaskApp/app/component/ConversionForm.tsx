import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  TextInput,
  Button
} from 'react-native';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { useForm, Controller } from "react-hook-form";

import IExchangeRate from '../model/exchangerate.type';

const styles = StyleSheet.create({
    input: {
        margin: 10,
        color: Colors.black
    },
    viewStyle: {
        marginTop: 10,
        paddingHorizontal: 24,
        marginBottom: 10
    },
    headingStyle: {
        color: Colors.black,
        fontSize: 20,
        fontWeight: '600'
    },
    labelStyle: {
        color: Colors.black,
        fontSize: 20
    }
});

const ConversionForm: React.FC<{
    data: IExchangeRate[]
}> = ({data}) => {

  type Inputs = {
    amount: string,
    targetcurrency: string,
    targetamount: string
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      amount: '0.0',
      targetcurrency: 'USD'
    }
  });
  

  const items: ItemType[] = [];
  let rateMap = new Map();  

  data.forEach(({code}) => items.push({label: code, value: code}));
  data.forEach((elem) => rateMap.set(elem.code, elem.rate ));

  const [ddopen, setddOpen] = useState(false);
  const [converted, setConverted] = useState(0);

  const onSubmit = (fd: Inputs) => {
    let c = parseFloat(fd.amount) * rateMap.get(fd.targetcurrency);
    setConverted(c);
  };

    return (
      <View style={styles.viewStyle}>
        <Text style={styles.headingStyle}>Conversion Form</Text>
        <Text style={styles.labelStyle}>Amount</Text>
        <Controller
          control={control}
          rules={{
            required: true,
           }}
          
           render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="amount"
        />
        
        <Button title="Convert" onPress={handleSubmit(onSubmit)} />
        <Controller
          control={control}
          rules={{
            required: true,
           }}
          
           render={({ field: { onChange, onBlur, value } }) => (
            <DropDownPicker
              value={value}
              items={items}
              open={ddopen}
              setValue={(value) => {
                onChange(value);
              }}
              onChangeValue={(value) => {
                onChange(value);
              }}
              setOpen={setddOpen}
            />
          )}
          name="targetcurrency"
        />
        
        
        <Text style={styles.headingStyle}>Converted Value : {converted}</Text>
      </View>
    );
}

export default ConversionForm;