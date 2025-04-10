import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        fontFamily: "Helvetica",
    },
    header: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 10,
    },
    section: {
        marginBottom: 10,
    },
    table: {
        display: "table",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCol: {
        flex: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,

        textAlign: "center",
    },
    gray: {
        backgroundColor: "#f3f3f3",
    },
    footer: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        fontSize: 10,
        textAlign: "center",
    },
});
const ILAPage = ({ scoresheet }) => {
    const zeroScoreArray = (scoresheet.answers).filter(
        (ans) => ans?.score === '0' && ans?.questionnaire?.specification != null
    );
    console.log("zeroScoreArray1", zeroScoreArray);
    // console.log("zeroScoreArray2", scoresheet.answers);
    return (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document>
                <Page size="Legal" orientation="landscape" style={styles.page}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 14,
                                fontWeight: "bold",
                            }}
                        >
                            Individual Learning Agreement
                        </Text>

                        <View>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text>Name of Learner: Rashid malawi</Text>

                                <Text>Community Learning Center: ALS </Text>
                            </View>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text>Level: Junior High Level</Text>
                                <Text>
                                    Name of Learning Facilitator: Sidney
                                    Palaubsanon{" "}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Text style={{ fontWeight: "bold" }}>
                                Direction:
                            </Text>
                            <Text>
                                {" "}
                                Write your learning goals, your learning
                                activities or strategies in order to attain
                                these goals, and the timeline.{" "}
                            </Text>
                        </View>

                        <View style={styles.table}>
                            <View style={[styles.tableRow, styles.gray]}>
                                <View
                                    style={{
                                        flex: 1,
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderLeftWidth: 0,
                                        borderTopWidth: 0,

                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 9,
                                        }}
                                    >
                                        Learning Goals
                                    </Text>
                                    <Text style={{ fontSize: 8 }}>
                                        (Kasanayang Gusto Kong Matutunan)
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderLeftWidth: 0,
                                        borderTopWidth: 0,

                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 9,
                                        }}
                                    >
                                        Delivery Mode
                                    </Text>
                                    <Text style={{ fontSize: 8 }}>
                                        (Face-to-face, BRI, eLearning, etc.)
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderLeftWidth: 0,
                                        borderTopWidth: 0,

                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 9,
                                        }}
                                    >
                                        Timeline
                                    </Text>
                                    <Text style={{ fontSize: 8 }}>
                                        (Kailan mo ito gustong matutunan?)
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderLeftWidth: 0,
                                        borderTopWidth: 0,
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            paddingTop: 3,
                                            paddingBottom: 3,
                                            fontSize: 9,
                                        }}
                                    >
                                        Review of Learning Goals
                                    </Text>
                                    <View
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-evenly",
                                            borderTop: 1,
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                paddingTop:'5px',
                                                paddingBottom:'5px',
                                            }}
                                        >
                                            <Text style={{ fontSize: 8 }}>
                                                Achieved
                                            </Text>
                                            <Text style={{ fontSize: 8 }}>
                                                {" "}
                                                (Nakamtan)
                                            </Text>
                                        </View>
                                        <Text
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                borderLeft: 1,
                                                paddingTop:'5px',
                                                paddingBottom:'5px',
                                            }}
                                        >
                                            <Text style={{ fontSize: 8 }}>
                                                {" "}
                                                Not Achieved
                                            </Text>
                                            <Text style={{ fontSize: 8 }}>
                                                (Hindi Nakamtan)
                                            </Text>
                                        </Text>
                                        <Text
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                borderLeft: 1,
                                            }}
                                        >
                                            <Text style={{ fontSize: 8 }}>
                                                Date of Review
                                            </Text>
                                            <Text style={{ fontSize: 8 }}>
                                                (Petsa ng pagsusuri)
                                            </Text>
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderLeftWidth: 0,
                                        borderTopWidth: 0,
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 9,
                                        }}
                                    >
                                        Learning Facilitators
                                    </Text>
                                    <Text style={{ fontSize: 8 }}>
                                        (Payo ng Learning Facilitator)
                                    </Text>
                                </View>
                            </View>

                            {zeroScoreArray.map((res, idx) => (
                                <View style={styles.tableRow} key={idx}>
                                    <View style={styles.tableCol}>
                                        <Text style={{ padding: 3 }}>
                                            {res.questionnaire?.specification?? ""}
                                        </Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text>{res.delivery_mode??""}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text>{res.timeline??""}</Text>
                                    </View>
                                    <View style={styles.tableCol}></View>
                                    <View style={styles.tableCol}>
                                        <Text>{res.facilitator??""}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                        {/* continue here */}
                    </View>
                    <View
                        style={{
                            width: "100%",
                            position: "absolute",
                            bottom: 30,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingLeft: 50,
                            paddingRight: 50,
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>___________________________________</Text>
                            <Text>(Learner's Signature over Printed Name)</Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingRight: "40px",
                            }}
                        >
                            <Text>___________________________________</Text>
                            <Text>
                                (Learning Facilitator's Signature over Printed
                                Name)
                            </Text>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default ILAPage;
