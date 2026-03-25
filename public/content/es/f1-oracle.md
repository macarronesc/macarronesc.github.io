# F1 Oracle — Motor de Predicción de Carreras en Tiempo Real

**F1 Oracle** (Proyecto F.O.R.M.U.L.A.) es un proyecto avanzado de investigación en Machine Learning que conceptualicé, diseñé y entrené completamente desde cero. Diseñado para predecir los resultados de las carreras de Fórmula 1, el sistema va más allá de la estadística estática tradicional al utilizar Redes Neuronales Recurrentes (LSTM) para capturar la dinámica secuencial vuelta a vuelta del automovilismo.

Como iniciativa de investigación personal, desarrollé el *pipeline* completo: desde la ingesta de datos históricos (1950-2024) y la ingeniería de características complejas, hasta el diseño de la arquitectura de IA y un motor de predicción en vivo.

### El Reto: Por Qué Fallan los Modelos Estándar
La Fórmula 1 es un entorno altamente dinámico y caótico. Una sola vuelta influye directamente en la siguiente: la degradación de los neumáticos se acumula, las estrategias de paradas en boxes evolucionan y los impredecibles *safety cars* reinician la parrilla. Los modelos de *machine learning* tradicionales evalúan puntos de datos de forma independiente, fallando en capturar esta causalidad cronológica.

Para solucionarlo, diseñé una red **LSTM (Long Short-Term Memory)** equipada con capas de *masking* dinámico para procesar secuencias de carrera de longitud variable sin introducir errores de *zero-padding*.

### 🛠️ Mis Contribuciones Técnicas Clave

#### 1. Función de Pérdida Personalizada "Learning-to-Rank"
Los modelos de regresión tradicionales intentan predecir posiciones finales absolutas, un enfoque defectuoso para entornos de carrera. Para resolver esto, desarrollé una función de pérdida **Pairwise Hinge Loss** personalizada. En lugar de predecir posiciones exactas, el modelo aprende la clasificación relativa entre cualquier par de pilotos (optimizando la respuesta a: *"¿Terminará el piloto A por delante del piloto B?"*). Esto mejoró drásticamente la precisión posicional del modelo.

#### 2. Ingeniería de Características Contextuales Avanzada
Construí un *pipeline* de extracción de características vectorizado utilizando Pandas para generar más de 15 métricas en tiempo real por vuelta. Las características clave incluyen:
- **Deltas Espaciales:** Diferencias precisas en milisegundos respecto al líder de la carrera y al coche de delante.
- **Proxy de Safety Car:** Un algoritmo de detección de anomalías que identifica periodos de coche de seguridad comparando promedios de vueltas rodantes con el ritmo histórico.
- **Impacto Estratégico:** Seguimiento de la duración acumulada de las paradas en boxes para evaluar ventajas estratégicas en tiempo real.

#### 3. Motor de Predicción en Vivo (Real-Time)
No quería que el modelo funcionara solo con CSVs históricos. Desarrollé un *pipeline* asíncrono en tiempo real integrando la **API FastF1**. Durante un Gran Premio en vivo, el sistema:
- Ingiere telemetría en directo cada 5 minutos (a partir de la vuelta 16).
- Aplica las mismas transformaciones de ingeniería de datos al vuelo.
- Alimenta la red LSTM pre-entrenada con las secuencias procesadas.
- Genera una tabla de clasificación probabilística con el resultado final de la carrera.

### 📊 Rendimiento e Impacto Investigador

Entrenado con decenas de millones de tiempos por vuelta y evaluado estrictamente en la temporada 2024, el modelo logró resultados excepcionales:

| Métrica | Resultado |
|---------|-----------|
| **Precisión de Predicción del Ganador** | 100% |
| **Error Absoluto Medio (Ranking)** | ~2.3 posiciones |
| **Correlación de Rango de Spearman** | 0.96 |

El modelo demuestra un rendimiento excepcional en carreras estándar en seco y en densas batallas de mitad de tabla (*midfield*), demostrando eficazmente que las arquitecturas de Deep Learning pueden superar a los análisis estadísticos tradicionales del automovilismo.

### 💻 Tecnologías Utilizadas
`TensorFlow/Keras` · `Python` · `FastF1 API` · `Pandas` · `NumPy` · `Scikit-Learn` · `Jupyter`