# TEDA - A Computational Toolbox for Teaching Ensemble Based Data Assimilation

Introducing TEDA: The Premier Python Toolbox for Teaching Ensemble-based Data Assimilation

We are thrilled to present TEDA, a cutting-edge Python toolbox designed to facilitate the teaching and learning of ensemble-based data assimilation (DA). TEDA caters to the needs of educators and learners alike, offering a comprehensive platform to explore the captivating world of meteorological anomalies, climate change, and DA methodologies.

TEDA stands out as an exceptional resource in the landscape of DA software, as it prioritizes the educational experience. While operational software tends to focus on practical applications, TEDA empowers undergraduate and graduate students by providing an intuitive platform to grasp the intricacies of ensemble-based DA concepts and foster enthusiasm for scientific exploration.

Equipped with a diverse range of features and functionalities, TEDA enriches the learning process by offering powerful visualization tools. Students can delve into error statistics, model errors, observational errors, error distributions, and the dynamic evolution of errors. These visualizations provide multiple perspectives on numerical results, enabling students to develop a deep understanding of ensemble-based DA principles.

TEDA offers numerous ensemble-based DA methods, allowing students to explore an extensive range of techniques. From the stochastic ensemble Kalman filter (EnKF) to dual EnKF formulations, EnKF via Cholesky decomposition, EnKF based on modified Cholesky decomposition, EnKF based on B-localization, and beyond, TEDA equips learners with a comprehensive toolkit to study and compare various DA methodologies.

To enhance the learning experience further, TEDA incorporates a selection of captivating toy models. These models, including the Duffing equation (2 variables), the Lorenz 63 model (3 variables), and the Lorenz 96 model (40 variables), exhibit chaotic behavior under specific parameter configurations. Such models provide an excellent opportunity for students to experiment, validate, and gain hands-on experience with diverse DA methods.

TEDA's foundation is rooted in the Object-Oriented Programming (OOP) paradigm, enabling effortless integration of new techniques and models. This ensures that TEDA remains at the forefront of the rapidly evolving field of ensemble-based DA, allowing educators and researchers to incorporate the latest advancements into their teaching and experimentation.

Embark on a captivating journey of discovery and knowledge with TEDA as it unveils the secrets of data assimilation. Simulate various DA scenarios, experiment with different model configurations, and witness firsthand the transformative impact of ensemble-based DA methods on forecast accuracy and data analysis.

Unlock your true potential in the realm of data assimilation with TEDA. Whether you are an enthusiastic student or a dedicated educator, TEDA stands as your ultimate companion in unraveling the complexities of ensemble-based DA.

Keywords: Data Assimilation, Ensemble Kalman Filter, Education, Python.

## Supported methods


| Class                          | Description                                      | Reference                                                  |
| ------------------------------ | ------------------------------------------------ | ---------------------------------------------------------- |
| AnalysisEnKFShrinkagePrecision | Compute the precision matrix for EnKF Shrinkage Precision. | [6]                                                        |
|                                | Perform assimilation using EnKF Shrinkage Precision method. | [6]                                                        |
| AnalysisEnKFModifiedCholesky   | Compute the precision matrix for EnKF Modified Cholesky. | [4]                                                        |
|                                | Perform assimilation using EnKF Modified Cholesky decomposition. | [4]                                                        |
| AnalysisEnKFNaive              | Perform assimilation using Naive EnKF method.    | Nino Ruiz, Elias D., Adrian Sandu, and Jeffrey Anderson. "An efficient implementation of the ensemble Kalman filter based on an iterative Sherman–Morrison formula." Statistics and Computing 25 (2015): 561-577.                                                       |
| AnalysisEnSRF                  | Perform assimilation using EnSRF method.          | [7]                                                        |
| AnalysisETKF                   | Perform assimilation using ETKF method.           | [8]                                                        |
| AnalysisLETKF                  | Perform assimilation using LETKF method.          | [10]                                                       |
|                                | Inflate the ensemble Xa given an inflation factor. | [10]                                                       |
| AnalysisLEnKF                   | Perform assimilation using LEnKF method.          | [9]                                                        |
|                                | Inflate the ensemble Xa given an inflation factor. | [9]                                                        |
| AnalysisEnKFBLoc               | Perform assimilation using EnKF B-Loc method.     | [2]                                                        |
| AnalysisEnKFCholesky           | Perform assimilation using EnKF Cholesky decomposition. | [3]                                                        |
| AnalysisEnKF                    | Perform assimilation using EnKF full covariance matrix. | [1]                                                        |
| Analysis                        | Perform assimilation given background and observations. | -                                                          |

**Analysis (Abstract class for analysis methods)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisEnKF (Analysis EnKF full covariance matrix)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisEnKFBLoc (Analysis EnKF B-Loc)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisEnKFCholesky (EnKF implementation Cholesky)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisEnKFModifiedCholesky (Analysis EnKF Modified Cholesky decomposition)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| get_precision_matrix   | Returns the computed precision matrix. It takes the following parameters: <br>- **DX**: Deviation matrix.<br>- **regularization_factor**: Value used as alpha in the ridge model. |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisEnKFNaive (Analysis EnKF Naive)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |

**AnalysisEnKFShrinkagePrecision (Analysis EnKF Shrinkage Precision)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| get_precision_matrix   | Returns the computed precision matrix. It takes the following parameters: <br>- **DX**: Deviation matrix.<br>- **regularization_factor**: Value used as alpha in the ridge model. |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisEnSRF (Analysis EnSRF)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisETKF (Analysis Ensemble Transform Kalman Filter (ETKF))**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |

**AnalysisLEnKF (Analysis LEnKF)**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |

**AnalysisLETKF (Analysis Local Ensemble Transform Kalman Filter (LETKF))**

| Method                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| perform_assimilation   | Perform the assimilation step given the background and observations. It takes the following parameters: <br>- **background**: Background object representing the background ensemble or state.<br>- **observation**: Observation object representing the observation used for assimilation. |
| get_analysis_state     | Return the computed column mean of the ensemble Xa. It doesn't take any parameters. |
| inflate_ensemble       | Compute the new ensemble Xa given the inflation factor. It takes the following parameter: <br>- **inflation_factor**: Double number indicating the inflation factor to be applied to the ensemble. |
| get_ensemble           | Return the ensemble Xa. It doesn't take any parameters. |
| get_error_covariance   | Return the computed covariance matrix of the ensemble Xa. It doesn't take any parameters. |
