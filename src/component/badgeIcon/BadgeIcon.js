import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BadgeIcon = ({ focused, count, color }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Ionicons name="chatbox-ellipses-outline" size={16} color={color} />
      {focused && count > 0 && (
        <View
          style={{
            position: 'absolute',
            top: -3,
            right: -8,
            backgroundColor: 'red',
            borderRadius: 10,
            minWidth: 18,
            paddingVertical: 2,
            paddingHorizontal: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 12 }}>{count}</Text>
        </View>
      )}
    </View>
  );
};

export default BadgeIcon;
