import React from "react";
import "./SideBar.css";
import Items from "../Items/Item";
import İl from "../../assets/images/il.png";
import Ac from "../../assets/images/ac.png";
import Co from "../../assets/images/co.png";
import ItemsGroups from "../Items/ItemsGroup";
import İnfo from "../../assets/images/info.png";
import Customer from "../../assets/images/customer.png";
import CustomerServices from "../../assets/images/customer-services.png";

function SideBar(props) {
  const merakEdilenData = () => [
    {
      icon: Co,
      title: "Kategori komisyon oranları",
      description: "kategori komisyon",
    },
    {
      icon: Ac,
      title: "Kargo Ücretleri",
      description: "Kargo firmaları ve desi bazlı ücretlendirme tarifesi",
    },
  ];
  const contactData = () => [
    {
      icon: CustomerServices,
      title: "Satıcı Portalı Çözüm Merkezi",
      description: "Destek talebi oluşturarak bize ulaşabilirsiniz",
    },
    {
      icon: İnfo,
      title: "Kötüye kullanım bildir",
      description: "0850 205 41 04 numaralı hattan bizlere bildirebilirsiniz.",
    },
    {
      icon: Customer,
      title: "Kötüye kullanım bildir",
      description: "0850 205 41 04 numaralı hattan bizlere bildirebilirsiniz.",
    },
  ];
  return (
    <div class="container-question" style={{ textAlign: "left" }}>
      <img src={İl} width="390" height="250" />
      <div className="container-text">
        <div className="help-title-text">
          <h3
            style={{
              fontSize: "25px",
              color: "#484848",
              margin: 0,
              lineHeight: "15px",
            }}
          >
            Yardım merkezi
          </h3>
          <p
            style={{
              color: "#646464",
              fontSize: "16px",

              width: "300px",
              margin: "8px 8px 20px 8px ",
            }}
          >
            Merhaba kardeşler ithalat ve ihracatta , Size nasıl yardımcı
            olabiliriz?
          </p>
        </div>
        <ItemsGroups headline="MERAK EDİLENLER" data={merakEdilenData()} />
        <ItemsGroups headline="İLETİŞİM" data={contactData()} />

        {/* 
        <Items
          itemtitle="
          ERAK EDİLENLER"
          texttitle="Kategori komisyon oranları"
          textwrite="kategori komisyon"
          texttitlecategory="satıcı portalı çözüm merkezi"
          textwritecategory="kötüye kullanım bildir"
        ></Items> */}
      </div>
    </div>
  );
}

export default SideBar;
