import React from "react";
import styles from "./styles.module.css";

import Casablanca from "../../images/Casablanca.jpg"
import Obala from "../../images/Obala.jpg"
import UkletaKuca from "../../images/UkletaKuca.jpg"
import Android from "../../images/Android.jpg"

export default () => (
    <aside className={styles.Aside}>
            <h2 >Najnovije</h2>
            <div className={styles.asideContent}>
                <div className={styles.card}>
                    <div>
                        <img className={styles.SlikaNovosti} src={Casablanca} alt="Casablanca"/>
                    </div>
                    <div className={styles.TekstNovosti}>
                        <h3>Vijest:</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.SlikaNovosti} src={Obala} alt="Casablanca"/>
                    </div>
                    <div className={styles.TekstNovosti}>
                    <h3>Vijest:</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.SlikaNovosti} src={UkletaKuca} alt="Casablanca"/>
                    </div>
                    <div className={styles.TekstNovosti}>
                        <h3>Vijest:</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.SlikaNovosti} src={Android} alt="Casablanca"/>
                    </div>
                    <div className={styles.TekstNovosti}>
                        <h3>Vijest:</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
    </aside>
);
