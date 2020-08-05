import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherCard = () => (
  <article className="teacher-card">
    <header>
      <img src="https://scontent.fcwb2-1.fna.fbcdn.net/v/t1.0-9/50813454_2116440445116266_3556690141831495680_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeFuJhy1_MQ1S95iz0khK6lmJHt2e6bmkfske3Z7puaR-065es9qPJK1H14kjSYAC-O1abIv3hEesoS-c5R5zgi4&_nc_ohc=GYRM_5T_ttMAX-v8uSW&_nc_ht=scontent.fcwb2-1.fna&oh=c07c9b25aaff0a3cd9434625512d9b6e&oe=5F4E789C" alt="Foto do professor" />
      <div className="teacher-card-title">
        <h3>Julio L. Muller</h3>
        <span>Excel</span>
      </div>
    </header>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa quis. Praesentium officiis id quis rerum illum nam velit excepturi repellat beatae iusto. Placeat eveniet ducimus voluptatum nemo, facere doloribus!</p>
    </div>
    <footer>
      <p>
        Preço por hora:
        <span>R$ 80,00</span>
      </p>
      <button type="button">
        <img src={whatsAppIcon} alt="Ícone do WhatsApp" />
        Entrar em contato
      </button>
    </footer>
  </article>
)

export default TeacherCard
