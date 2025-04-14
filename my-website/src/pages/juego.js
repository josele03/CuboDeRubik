/*
 * Copyright 2025 José Márquez Carqués
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This file is a modified version of a file originally from the
 * "RubixCube" project, licensed under the Apache License 2.0.
 */

import React from 'react';
import Layout from '@theme/Layout';
import AppRubix from '../components/Rubix/AppRubix.js';
import '../css/rubix.css'; 

export default function RubixCubePage() {
  return (
    <Layout
      title="RubixCube"
      description="Pantalla interactiva del Cubo de Rubik">
      <main>
        <AppRubix /> {/* Renderiza el modelo interactivo */}
      </main>
    </Layout>
  );
}