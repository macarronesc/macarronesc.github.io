# F1 Oracle — Aprender clasificaciones a partir de datos por vuelta

**Mi papel:** Desarrollador e investigador de ML en solitario · **Contexto:** Experimento personal, también llamado Proyecto F.O.R.M.U.L.A.

F1 Oracle explora si los datos secuenciales de una carrera ayudan a predecir la clasificación final de Fórmula 1. Desarrollé el pipeline desde la preparación de datos históricos hasta un modelo LSTM de ranking y un flujo de predicción conectado con FastF1.

## El problema de modelado

Una carrera es una secuencia: diferencias de tiempo, paradas y cambios de ritmo afectan a lo que ocurre después. En lugar de tratar cada instante como independiente, el modelo procesa secuencias de vueltas y aprende clasificaciones relativas entre pilotos.

## Qué implementé

- **Ingeniería de variables:** transformaciones vectorizadas con Pandas para diferencias, ritmo relativo, efecto de paradas y señales de contexto.
- **Tratamiento de secuencias:** masking y padding para historiales de distinta longitud.
- **Objetivo de ranking:** función pairwise hinge loss para aprender si un piloto terminará por delante de otro, en lugar de predecir posiciones aisladas únicamente por regresión.
- **Flujo de predicción:** integración FastF1 que aplica las mismas transformaciones a datos entrantes antes de actualizar la clasificación.

## Enfoque de evaluación

El error de ranking, la correlación de Spearman y el acierto del ganador en un momento definido de la carrera responden a preguntas distintas. Predecir al final de una carrera no equivale a pronosticar antes de la salida.

La evaluación es exploratoria. Una comparación cuantitativa reproducible necesita la partición de entrenamiento y prueba, carreras evaluadas, vuelta de predicción, tratamiento de abandonos y baselines. El proyecto se centra en ese problema de modelado, sin prometer un pronóstico infalible.

**Stack:** Python · TensorFlow/Keras · FastF1 · Pandas · NumPy · Scikit-learn · Jupyter
