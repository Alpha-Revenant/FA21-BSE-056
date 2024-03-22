import React from "react";
import { View, StyleSheet } from "react-native";

function Chessboard() {
  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      const cells = [];
      for (let j = 0; j < 8; j++) {
        const color = (i + j) % 2 === 0 ? "black" : "white";
        cells.push(
          <View
            key={`${i}-${j}`}
            style={[styles.cell, { backgroundColor: color }]}
          />
        );
      }
      rows.push(
        <View key={`row-${i}`} style={styles.row}>
          {cells}
        </View>
      );
    }
    return rows;
  };

  return <View style={styles.board}>{renderBoard()}</View>;
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: "column",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
  },
});

export default Chessboard;