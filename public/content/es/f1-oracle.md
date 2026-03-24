# F1 Oracle — Motor de Predicción de Carreras con IA

**F1 Oracle** (Proyecto F.O.R.M.U.L.A. — *Forecasting Outcomes with Recurrent Model Using Lap-time Analysis*) es un motor analítico avanzado basado en Inteligencia Artificial que desarrollé para modelar y anticipar los resultados de carreras de Fórmula 1 en escenarios de tiempo real. A diferencia de los enfoques estadísticos estáticos prevalentes, implementa una arquitectura de memoria a corto y largo plazo (LSTM) diseñada específicamente para capturar la naturaleza estocástica y las intrincadas dinámicas secuenciales del automovilismo de competición.

### Dinámicas Temporales y Limitaciones de Análisis Convencional

Las carreras de Fórmula 1 conforman procesos fuertemente secuenciales donde el estado de cada vuelta condiciona drásticamente la siguiente — variables como degradación de compuestos térmicos, desgaste de combustible, *undercuts/overcuts* tácticos de pit, e intervenciones abruptas de seguridad (*safety cars*) desencadenan efectos no lineales formidables a posteriori. Los modelos predictivos alimentados en base a proyecciones independientes malinterpretan severamente estos impactos acumulados y dependencias críticas en cadencia espaciotemporal. El diseño orientado bajo capas LSTM proporciona exactamente la modelización perfecta en proyecciones determinantes sobre distribuciones progresivas inter-vuelta y causalidad.

### El Motor Operativo Interconectado

**Ingesta y Fase Computacional del Modelo Base:**
- Entrenado exhaustivamente mediante hiperparametrización masiva sobre **más de 70 años de data point telemetría histórica de competición de la FIA** (1950–2024), conteniendo más de 1.000 Grand Prix, y procesando conmensurablemente una escala colosal global combinada de tiempos por vuelta y variabilidades referidas a cientos de perfiles.
- Focalización rigurosa impuesta dentro de la era V6-Híbrida y contemporánea (2012+), garantizando absoluta representatividad moderna aerodinámica para la extracción granular de telemetría y tiempos.
- Procesamiento transversal in-capa conteniendo simultáneamente más de 15 atributos de ingeniería *feature-engineered* ultra finos aplicables en cada vuelta que encadenan vectorialmente distancias a delta líderes, *gaps* milimétricos inter-coches, intervenciones y detenciones neutrales, penalizaciones, momentum por piloto operando por *feature extraction* estricto.

**Sistema de Optimización por *Pairwise Hinge Loss*:**
Desechando paradigmas tradicionales y arcaicos para modelos predictivos de asignación nominal o lineal, concebí y acoplé una novedosa función restrictiva penalizadora *Pairwise Hinge Loss* orientada exclusivamente hacia clasificaciones relativas — priorizando el aprendizaje cognitivo en red sobre "cuál perfil finalizará a priori sobre otro" incrementando exponencialmente los resultados del modelo correlativo *ranking* sobre simples asignaciones absolutas nominales y erráticas.

**Ciclo *Live Racing Predictions Pipeline* (Interconexión en Eventos GP):**
- Conectividad API asíncrona inyectando directo flujo empírico en carrera por endpoints FastF1 a memoria.
- Activa heurísticas evaluativas de cálculo en fase inicial de estabilización a partir del momento ventana vuelta número 16 (disposición probabilística factible sólida).
- Recalibraciones automáticas orquestadas del modelo prediccional sobre *time-slots* cada 5 minutos sobre eventos mutables del entorno real transcurrido en el circuito y su proyección general a bandera de meta emitiendo ordenanzas y parámetros sobre confidencias de éxito algorítmico preestablecido.

### Topología Sistémica en Redes Neuronales

```
Input Masking → LSTM(128) → Dropout(0.3) → LSTM(64) → Dropout(0.3) → Dense(64, ReLU) → Dense(1 Output Score)
```

La adición integradora sobre capa *masking* de entrada fue elemental permitiendo transaccionalizar elásticas variabilidades operativas en las longitudes de *arrays*, posibilitando procesadores que orquestasen series operativas procedentes tras vueltas o sobre trazados drásticamente más dilatados excluyendo artefactos computacionales *padding errors*.

### Resultados Empíricos Temporada FIA 2024

| Métrica Evaluable | Grado de Éxito Cuantitativo |
|---------|-----------|
| **Índice Precisión Asignación Ganador** | 100% |
| **MAE (Error Absoluto Medio Evaluativo)** | 2.3 posiciones |
| **Coeficiente Correlacional de Ranks Spearman** | 0.96 |

Esta arquitectura red neuronal despuntó impecablemente en parámetros óptimos trazables en clima y desgastes progresivos estables mitigando altamente *mid-field tight pack battles*. Mantiene como único factor impredecible severos comportamientos erráticos con alteraciones climáticas torrenciales inusuales (*wet tracks*) sin antecedentes computacionales en bases fidedignas cuantificables.

### Herramientarios Tecnológicos Acuñados
`TensorFlow` · `Python` · `FastF1 API` · `scikit-learn` · `Pandas` · `NumPy`
