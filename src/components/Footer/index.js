import React from "react";
import styles from "./styles.module.css";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.footerNavigation}> 
        <span className={styles.footerList}>
            <a> 
                <span className={styles.navFooter}>Kontakt</span>
            </a>     

            <a> 
                <span className={styles.navFooter}>Impressum</span>
            </a>
                                    
            <a> 
                <span className={styles.navFooter}>Zaštita privatnosti</span>
            </a>
                                    
            <a>
                <span className={styles.navFooter}>Marketing</span>
            </a> 

            <a>
                <span className={styles.navFooter}>Uvjeti korištenja</span>
            </a>  
                    </span>
                <div className={styles.Copyright}>
                    <a>
                        <span>Copyright Leo Kacic HCI 2018</span>
                    </a>
            </div>
    </div>
  </footer>
);
