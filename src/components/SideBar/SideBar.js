import React from "react";
import "./SideBar.css";
import İllustration from "../../assets/images/illustration.png";
import Accounting from "../../assets/images/accounting.png";
import Commission from "../../assets/images/commission.png";
import ItemsGroups from "../Items/ItemsGroup";
import İnfo from "../../assets/images/info.png";
import Customer from "../../assets/images/customer.png";
import CustomerServices from "../../assets/images/customer-services.png";

function SideBar(props) {
  const merakEdilenData = () => [
    {
      icon: Commission,
      title: "Kategori komisyon oranları",
      description: "kategori komisyon",
    },
    {
      icon: Accounting,
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
      <img src={İllustration} width="390" height="250" />

      <div className="container-text">
        <div className="help-title-text">
          <h3>Yardım merkezi</h3>
          <p>
            Merhaba kardeşler ithalat ve ihracatta , Size nasıl yardımcı
            olabiliriz?
          </p>
        </div>
        <ItemsGroups headline="MERAK EDİLENLER" data={merakEdilenData()} />
        <ItemsGroups
          headline="İLETİŞİM"
          boxShadow="0 2px 16px 0 rgba(0, 0, 0, 0.08)"
          data={contactData()}
        />

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
