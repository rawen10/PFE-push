from typing import List, Tuple

from flwr.server import ServerApp, ServerConfig
from flwr.server.strategy import FedAvg
from flwr.common import Metrics


# Define metric aggregation function
def weighted_average(metrics: List[Tuple[int, Metrics]]) -> Metrics:
    # Multiply accuracy of each client by number of examples used
    accuracies = [num_examples * m["accuracy"] for num_examples, m in metrics]
    examples = [num_examples for num_examples, _ in metrics]

    # Aggregate and return custom metric (weighted average)
    return {"accuracy": sum(accuracies) / sum(examples)}


# Define strategy
# strategy = FedAvg(evaluate_metrics_aggregation_fn=weighted_average)
strategy = FedAvg(min_fit_clients=1, min_evaluate_clients=1, min_available_clients=1)


# Define config
config = ServerConfig(num_rounds=3)


# Flower ServerApp
app = ServerApp(
    config=config,
    strategy=strategy,
)
def my_function():
  return("Hello from a function")

# Legacy mode
if __name__ == "__main__":
    from flwr.server import start_server

    start_server(
        server_address="0.0.0.0:8080",
        config=config,
        strategy=strategy,
    )
    my_function()
