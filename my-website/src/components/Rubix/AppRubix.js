/*
 * Basado en código bajo licencia Apache 2.0.
 * Archivo original: parte de mi TFG.
 * Modificado por: Jose Márquez Carqués
 */

import React from 'react';
import CubeContainer from '../Rubix/CubeContainer'; // Ajusta la ruta
import '../../css/rubix.css'; // Ajusta la ruta de los estilos
import BrowserOnly from '@docusaurus/BrowserOnly';


class AppRubix extends React.Component {
    render() {
        return (
            <BrowserOnly>
            {() => <CubeContainer />}
            </BrowserOnly>
        );
    }
}

export default AppRubix;
