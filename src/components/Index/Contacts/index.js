import React from "react"
import Title from "../UI/Title/Item-2"

import "./style.scss"
import Icon from "../../../images/contacts.svg"
import ContactIcon from "../../../images/contact.jpg"
import { isEmpty } from "lodash"

function Index({ siteData }) {
  const contacts = !isEmpty(siteData) ? siteData.contacts : []
  return (
    <div className="contacts">
      <Title label="Контакты" icon={Icon} />
      <div className="contacts__content">
        <div className="contacts__description">
          Уважаемые гости, если Вы готовите творческие подарки, <br />
          позвоните, пожалуйста, нашему организатору!
        </div>
        <div className="contacts__items">
          {contacts.map(contact => (
            <div className="contacts__item" key={contact.phone}>
              <a href={contact.link}>
                <img
                  src={ContactIcon}
                  alt={contact.name}
                  className="contacts__item--icon"
                />
              </a>
              <div className="contacts__item--row">
                <div className="contacts__item--position">
                  {contact.position}
                </div>
              </div>
              <div className="contacts__item--row">
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className="contacts__item--link"
                >
                  <div className="contacts__item--name">{contact.name}</div>
                  <div className="contacts__item--phone">{contact.phone}</div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
