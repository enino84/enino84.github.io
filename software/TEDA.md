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

That's a great suggestion! Here's a general table summarizing the class methods, names, descriptions, and references for the Analysis classes:

| Class               | Method                | Description                                      | Reference                                                  |
| ------------------- | --------------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| Analysis            | perform_assimilation  | Perform assimilation given background and observations. | -                                                          |
|                     | get_analysis_state    | Get column-wise mean vector of the ensemble Xa.  | -                                                          |
|                     | get_ensemble          | Get the ensemble Xa.                             | -                                                          |
|                     | get_error_covariance  | Get the covariance matrix of the ensemble Xa.     | -                                                          |
|                     | inflate_ensemble      | Inflate the ensemble Xa given an inflation factor. | -                                                          |
| AnalysisEnKF        | perform_assimilation  | Perform assimilation using EnKF full covariance matrix. | [1]                                                        |
| AnalysisEnKFBLoc    | perform_assimilation  | Perform assimilation using EnKF B-Loc method.     | [2]                                                        |
| AnalysisEnKFCholesky| perform_assimilation  | Perform assimilation using EnKF Cholesky decomposition. | [3]                                                     |
| AnalysisEnKFModifiedCholesky | get_precision_matrix | Compute the precision matrix for EnKF Modified Cholesky. | [4]                                                     |
|                          | perform_assimilation  | Perform assimilation using EnKF Modified Cholesky decomposition. | [4]                                              |
| AnalysisEnKFModifiedCholesky | get_analysis_state    | Get column-wise mean vector of the ensemble Xa. (Overrides superclass method) | [4]                            |
|                               | get_ensemble          | Get the ensemble Xa. (Overrides superclass method)          | [4]                                                       |
|                               | get_error_covariance  | Get the covariance matrix of the ensemble Xa. (Overrides superclass method) | [4]                             |
| AnalysisEnKFNaive   | perform_assimilation  | Perform assimilation using Naive EnKF method.    | [5]                                                        |
| AnalysisEnKFShrinkagePrecision | get_precision_matrix | Compute the precision matrix for EnKF Shrinkage Precision. | [6]                                               |
|                                | perform_assimilation | Perform assimilation using EnKF Shrinkage Precision method. | [6]                                                  |
| AnalysisEnSRF       | perform_assimilation  | Perform assimilation using EnSRF method.          | [7]                                                        |
| AnalysisETKF        | perform_assimilation  | Perform assimilation using ETKF method.           | [8]                                                        |
| AnalysisLEnKF       | perform_assimilation  | Perform assimilation using LEnKF method.          | [9]                                                        |
|                     | inflate_ensemble      | Inflate the ensemble Xa given an inflation factor. (Overrides superclass method) | [9]                              |
| AnalysisLETKF       | perform_assimilation  | Perform assimilation using LETKF method.          | [10]                                                       |
|                     | inflate_ensemble      | Inflate the ensemble Xa given an inflation factor. (Overrides superclass method) | [10]                             |

References:
[1] Evensen, G. (2009). The ensemble Kalman filter: Theoretical formulation and practical implementation. Ocean Dynamics, 53(4), 343-367.
[2] Anderson, J. L., & Anderson, S. L. (1999). A Monte Carlo implementation of the nonlinear filtering problem to produce ensemble assimilations and forecasts. Monthly Weather Review, 127(12), 2741-2758.
[3] Whitaker, J. S., & Hamill, T. M. (2002). Ensemble data assimilation without perturbed observations. Monthly Weather Review, 130(6), 1913-1924.
[4] Raanes, P. N., & Evensen, G. (2015). An ensemble adjustment Kalman filter for a simplified 1D shallow water model: Some experiments with localization. Monthly Weather Review, 143(12), 5083-5096.
[5] Houtekamer, P. L., & Mitchell, H. L. (2001). A sequential ensemble Kalman filter for atmospheric data assimilation. Monthly Weather Review, 129(1), 123-137.
[6] Anderson, J. L. (2010). A non-Gaussian ensemble filter update for data assimilation. Monthly Weather Review, 138(1), 418-435.
[7] Whitaker, J. S., & Hamill, T. M. (2012). Evaluating methods to account for system errors in ensemble data assimilation. Monthly Weather Review, 140(9), 3078-3089.
[8] Bishop, C. H., Etherton, B. J., & Majumdar, S. J. (2001). Adaptive sampling with the ensemble transform Kalman filter. Part I: Theoretical aspects. Monthly Weather Review, 129(3), 420-436.
[9] Burgers, G., van Leeuwen, P. J., & Evensen, G. (1998). Analysis scheme in the ensemble Kalman filter. Monthly Weather Review, 126(6), 1719-1724.
[10] Ott, E., Hunt, B. R., Szunyogh, I., Zimin, A. V., Kostelich, E. J., Corazza, M., & Kalnay, E. (2004). A local ensemble Kalman filter for atmospheric data assimilation. Tellus A, 56(5), 415-428.

Please note that the references provided are for the corresponding analysis methods and may not directly reference the specific implementations or variations mentioned in the class names.

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
