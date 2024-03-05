import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "./../../img/J-logo.png";
const Header = () => {
	return (
		<header className="header">
			<div className="header_logo">
				<NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
			<div className="header_desktop_menu">
				<ul className="header_desktop_menu_nav">
					<li>
						<span title="Песни о Богах">Goðakvæði</span>
						<ul className="header_desktop_menu_nav_submenu">
							<li>
								<a
									className="solid"
									href="./pages/about_gods/voluspa.html"
									title="Прорицание вёльвы"
								>
									Völuspá
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/havamal.html"
									title="Речи Высокого"
								>
									Hávamál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/vafthrudnismal.html"
									title="Речи Вафтруднира"
								>
									Vafþrúðnismál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/grimnismal.html"
									title="Речи Гримнира"
								>
									Grímnismál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/skirnismal.html"
									title="Поездка Скирнира"
								>
									Skírnismál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/harbardsljod.html"
									title="Песнь о Харбарде"
								>
									Hárbarðsljóð
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/hymiskvida.html"
									title="Песнь о Хюмире"
								>
									Hymiskviða
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/lokasenna.html"
									title="Перебранка Локи"
								>
									Lokasenna
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/trymskvida.html"
									title="Песнь о Трюме"
								>
									Þrymskviða
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_gods/alvissmal.html"
									title="Речи Альвиса"
								>
									Alvíssmál
								</a>
							</li>
						</ul>
					</li>
					<li>
						<span title="Песни о Героях">Hetjukvæði</span>
						<ul className="header_desktop_menu_nav_submenu">
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/volundarkvida.html"
									title="Песнь о Вёлунде"
								>
									Völundarkviða
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/helgakvida_hjorvardssonar.html"
									title="Песнь о Хельги, сыне Хьёрварда"
								>
									Helgakviða Hjörvarðssonar
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/helgakvida_hundingsbana_in_fyrri.html"
									title="Первая Песнь о Хельги убийце Хундинга"
								>
									Helgakviða Hundingsbana in fyrri
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/helgakvida_hundingsbana_onnur.html"
									title="Вторая Песнь о Хельги убийце Хундинга"
								>
									Helgakviða Hundingsbana önnur
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/fra_dauda_sinfjotla.html"
									title="О смерти Синфьётли"
								>
									Frá dauða Sinfjötla
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/gripisspa.html"
									title="Пророчество Грипира"
								>
									Grípisspá
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/reginsmal.html"
									title="Речи Регина"
								>
									Reginsmál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/fafnismal.html"
									title="Речи Фафнира"
								>
									Fáfnismál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/sigrdrifumal.html"
									title="Речи Сигдривы"
								>
									Sigrdrífumál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/sigurdarkvida_in_meiri.html"
									title="Отрывок Песни о Сигурде"
								>
									Sigurðarkviða in meiri
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/gudrunarkvida_in_fyrsta.html"
									title="Первая Песнь о Гудрун"
								>
									Guðrúnarkviða in fyrsta
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/sigurdarkvida_in_skamma.html"
									title="Краткая Песнь о Сигурде"
								>
									Sigurðarkviða in skamma
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/helreid_brynhildar.html"
									title="Поездка Брюнхильд в Хель"
								>
									Helreið Brynhildar
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/drap_niflunga.html"
									title="Убийство Нифлунгов"
								>
									Dráp Niflunga
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/gudrunarkvida_in_forna.html"
									title="Вторая Песнь о Гудрун"
								>
									Guðrúnarkviða in forna
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/gudrunarkvida_in_thridja.html"
									title="Третья Песнь о Гудрун"
								>
									Guðrúnarkviða in þriðja
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/oddrunarkvida.html"
									title="Плач Оддрун"
								>
									Oddrúnarkviða
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/atlakvida_in_groenlenzka.html"
									title="Гренландская Песнь об Атли"
								>
									Atlakviða in grœnlenzka
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/atlamal_in_groenlenzku.html"
									title="Гренландские Речи Атли"
								>
									Atlamál in grœnlenzku
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/gudrunarhvot.html"
									title="Подстрекательство Гудрун"
								>
									Guðrúnarhvöt
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/about_heroes/hamdismal.html"
									title="Речи Хамдира"
								>
									Hamðismál
								</a>
							</li>
						</ul>
					</li>
					<li>
						<span title="Эддические песни, сохранившиеся не в основной рукописи">
							Eddukvæði úr ýmsum handritum
						</span>
						<ul className="header_desktop_menu_nav_submenu">
							<li>
								<a
									className="solid"
									href="./pages/edda_song/baldrs_draumar.html"
									title="Сны Бальдра, или Песнь о Вегтаме"
								>
									Baldrs draumar
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/rigstula.html"
									title="Песнь о Риге"
								>
									Rígsþula
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/hyndluljod.html"
									title="Песнь о Хюндле"
								>
									Hyndluljóð
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/voluspa_in_skamma.html"
									title="Краткое Прорицание вёльвы"
								>
									Völuspá in skamma
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/grottasongr.html"
									title="Песнь о Гротти"
								>
									Gróttasöngr
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/grogaldr.html"
									title="Заклинание Гроа"
								>
									Grógaldr
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/fjolsvinnsmal.html"
									title="Речи Многомудрого"
								>
									Fjölsvinnsmál
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/hjalmarskvida.html"
									title="Песнь о Хьяльмаре"
								>
									Hjálmarskviða
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/hervararkvida.html"
									title="Песнь о Хервёр"
								>
									Hervararkviða
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/hlodskvida.html"
									title="Песнь о Хлёде"
								>
									Hlöðskviða
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/halfsrekkaljod.html"
									title="Песнь о воинах Хальва"
								>
									Hálfsrekkaljóð
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/heidreksgatur.html"
									title="Загадки Хейдрека"
								>
									Heiðreksgátur
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/darradarljod.html"
									title="Песнь валькирий"
								>
									Darraðarljóð
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/edda_song/bjarkamal_in_fornu.html"
									title="Древние речи Бьярки"
								>
									Bjarkamál in fornu
								</a>
							</li>
						</ul>
					</li>
					<li>
						<span title="Приложения">Viðbætir</span>
						<ul className="header_desktop_menu_nav_submenu">
							<li>
								<a
									className="solid"
									href="./pages/applications/solarljod.html"
									title="Песнь о Солнце"
								>
									Sólarljóð
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/applications/hrafnagaldr_odins.html"
									title="Предваряющая песнь, или Вороново заклинание Одина"
								>
									Hrafnagaldr Óðins
								</a>
							</li>
							<li>
								<a
									className="solid"
									href="./pages/applications/gunnarsslagr.html"
									title="Напев Гуннара"
								>
									Gunnarsslagr
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="header_mobile_menu">
				<div className="header_mobile_menu_hamburger" id="hamburger">
					<i className="fa-solid fa-bars"></i>
				</div>
				<div className="overlay" id="overlay"></div>
				<nav className="menu" id="menu">
					<ul className="menu_nav">
						<li>
							<span>
								Goðakvæði<i className="fa-solid fa-chevron-down"></i>
							</span>
							<ul>
								<li>
									<a className="solid" href="./pages/about_gods/voluspa.html">
										Völuspá
									</a>
								</li>
								<li>
									<a className="solid" href="./pages/about_gods/havamal.html">
										Hávamál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_gods/vafthrudnismal.html"
									>
										Vafþrúðnismál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_gods/grimnismal.html"
									>
										Grímnismál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_gods/skirnismal.html"
									>
										Skírnismál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_gods/harbardsljod.html"
									>
										Hárbarðsljóð
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_gods/hymiskvida.html"
									>
										Hymiskviða
									</a>
								</li>
								<li>
									<a className="solid" href="./pages/about_gods/lokasenna.html">
										Lokasenna
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_gods/trymskvida.html"
									>
										Þrymskviða
									</a>
								</li>
								<li>
									<a className="solid" href="./pages/about_gods/alvissmal.html">
										Alvíssmál
									</a>
								</li>
							</ul>
						</li>
						<li>
							<span>
								Hetjukvæði<i className="fa-solid fa-chevron-down"></i>
							</span>
							<ul>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/volundarkvida.html"
									>
										Völundarkviða
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/helgakvida_hjorvardssonar.html"
									>
										Helgakviða Hjörvarðssonar
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/helgakvida_hundingsbana_in_fyrri.html"
									>
										Helgakviða Hundingsbana in fyrri
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/helgakvida_hundingsbana_onnur.html"
									>
										Helgakviða Hundingsbana önnur
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/fra_dauda_sinfjotla.html"
									>
										Frá dauða Sinfjötla
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/gripisspa.html"
									>
										Grípisspá
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/reginsmal.html"
									>
										Reginsmál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/fafnismal.html"
									>
										Fáfnismál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/sigrdrifumal.html"
									>
										Sigrdrífumál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/sigurdarkvida_in_meiri.html"
									>
										Sigurðarkviða in meiri
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/gudrunarkvida_in_fyrsta.html"
									>
										Guðrúnarkviða in fyrsta
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/sigurdarkvida_in_skamma.html"
									>
										Sigurðarkviða in skamma
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/helreid_brynhildar.html"
									>
										Helreið Brynhildar
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/drap_niflunga.html"
									>
										Dráp Niflunga
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/gudrunarkvida_in_forna.html"
									>
										Guðrúnarkviða in forna
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/gudrunarkvida_in_thridja.html"
									>
										Guðrúnarkviða in þriðja
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/oddrunarkvida.html"
									>
										Oddrúnarkviða
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/atlakvida_in_groenlenzka.html"
									>
										Atlakviða in grœnlenzka
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/atlamal_in_groenlenzku.html"
									>
										Atlamál in grœnlenzku
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/gudrunarhvot.html"
									>
										Guðrúnarhvöt
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/about_heroes/hamdismal.html"
									>
										Hamðismál
									</a>
								</li>
							</ul>
						</li>
						<li>
							<span>
								Eddukvæði úr ýmsum handritum
								<i className="fa-solid fa-chevron-down"></i>
							</span>
							<ul>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/baldrs_draumar.html"
									>
										Baldrs draumar
									</a>
								</li>
								<li>
									<a className="solid" href="./pages/edda_song/rigstula.html">
										Rígsþula
									</a>
								</li>
								<li>
									<a className="solid" href="./pages/edda_song/hyndluljod.html">
										Hyndluljóð
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/voluspa_in_skamma.html"
									>
										Völuspá in skamma
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/grottasongr.html"
									>
										Gróttasöngr
									</a>
								</li>
								<li>
									<a className="solid" href="./pages/edda_song/grogaldr.html">
										Grógaldr
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/fjolsvinnsmal.html"
									>
										Fjölsvinnsmál
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/hjalmarskvida.html"
									>
										Hjálmarskviða
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/hervararkvida.html"
									>
										Hervararkviða
									</a>
								</li>
								<li>
									<a className="solid" href="./pages/edda_song/hlodskvida.html">
										Hlöðskviða
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/halfsrekkaljod.html"
									>
										Hálfsrekkaljóð
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/heidreksgatur.html"
									>
										Heiðreksgátur
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/darradarljod.html"
									>
										Darraðarljóð
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/edda_song/bjarkamal_in_fornu.html"
									>
										Bjarkamál in fornu
									</a>
								</li>
							</ul>
						</li>
						<li>
							<span>
								Viðbætir<i className="fa-solid fa-chevron-down"></i>
							</span>
							<ul>
								<li>
									<a
										className="solid"
										href="./pages/applications/solarljod.html"
									>
										Sólarljóð
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/applications/hrafnagaldr_odins.html"
									>
										Hrafnagaldr Óðins
									</a>
								</li>
								<li>
									<a
										className="solid"
										href="./pages/applications/gunnarsslagr.html"
									>
										Gunnarsslagr
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
