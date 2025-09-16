"use client";
import { Text, View, Image } from "@react-pdf/renderer";
import Logo from "@/src/assets/radheyLogo.png";

export default function RenderInvoiceHeader() {
  return (
    <View fixed style={{ flexDirection: "row", gap: 10 }}>
      <Image
        src={Logo.src}
        style={{
          width: 60,
          height: 60,
          objectFit: "contain",
        }}
      />
      <View style={{ gap: 2, fontSize: 8 }}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Lato Bold",
            textTransform: "uppercase",
          }}
        >
          Radhey Thunders
        </Text>
        <Text
          style={{
            color: "#333",
            maxWidth: 220,
            fontFamily: "Lato",
          }}
        >
          No. 2/553/V3,Sri Ram Nagar, Sivakasi,Main Road, Mettamalai,
          Virudhunagar District, Tamil Nadu ,626203, India.
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              color: "#333",
              maxWidth: 200,
            }}
          >
            Mobile: +91 9360221102
          </Text>
          <Text
            style={{
              color: "#333",
              maxWidth: 200,
            }}
          >
            Email: radheythunders@gmail.com
          </Text>
        </View>
        <Text
          style={{
            color: "#333",
            maxWidth: 200,
          }}
        >
          Website: www.radheythunders.com/
        </Text>
      </View>
      <View
        style={{
          fontSize: 8,
          marginLeft: "auto",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 2,
        }}
      >
        <Text
          style={{
            color: "#0080FF",
            fontFamily: "Lato Bold",
          }}
        >
          TAX INVOICE
        </Text>
        <Text
          style={{
            color: "#333",
            fontFamily: "Lato",
          }}
        >
          ORIGINAL FOR RECIPIENT
        </Text>
      </View>
    </View>
  );
}
