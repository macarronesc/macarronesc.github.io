# F1 Oracle — Learning race rankings from lap-by-lap data

**My role:** Solo developer & ML researcher · **Context:** Personal experiment, also known as Project F.O.R.M.U.L.A.

F1 Oracle explores whether sequential race data can help predict a Formula 1 finishing order. I built the pipeline from historical-data preparation to an LSTM-based ranking model and a FastF1-connected prediction workflow.

## The modeling problem

A race is a sequence: gaps, pit stops and changes in pace affect what happens next. Rather than treating each snapshot independently, the model processes lap sequences and learns relative driver rankings.

## What I implemented

- **Feature engineering:** vectorized Pandas transformations for gaps, relative pace, pit-stop effects and race-context signals.
- **Sequence handling:** masking and padding for variable-length race histories.
- **Ranking objective:** a pairwise hinge-loss formulation that learns whether one driver should finish ahead of another, rather than only regressing isolated finishing positions.
- **Prediction workflow:** FastF1 integration applies the same feature transformations to incoming race data before producing an updated ranking.

## Evaluation focus

Useful measures include ranking error, Spearman correlation and winner prediction at a stated point in a race. They answer different questions: predicting late in a race is not the same task as making a pre-race forecast.

Evaluation is exploratory. A reproducible quantitative comparison needs the exact train/test split, evaluated races, prediction lap, handling of retirements and comparison baselines. The project focuses on that modeling problem rather than promising a guaranteed race forecast.

**Stack:** Python · TensorFlow/Keras · FastF1 · Pandas · NumPy · Scikit-learn · Jupyter
