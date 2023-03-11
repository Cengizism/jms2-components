import { useState, useEffect, useCallback } from "react";
import {
  Button,
  ButtonGroup,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

function QueryBuilder() {
  const [index, setIndex] = useState({});
  const [isAnyFiltersIdle, setIsAnyFiltersIdle] = useState(false);
  const [isNewFiltersOpen, setIsNewFiltersOpen] = useState(false);
  const [isShowingAll, setIsShowingAll] = useState(true);

  const filters = [
    {
      name: "Route",
      options: ["Route 1", "Route 2"],
    },
    {
      name: "Route result",
      options: ["Route not started", "Route failed", "Route completed"],
    },
    {
      name: "Type",
      options: ["Success", "Warning", "Error"],
    },
  ];

  const resetFilters = useCallback(() => {
    setIsNewFiltersOpen(false);
    filters.map((filter, filterIndex) => {
      index[filterIndex] = undefined;
      return null;
    });
    setIndex(index);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    resetFilters();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setIsAnyFiltersIdle(
      !Object.entries(index).every((i) => i[1] !== undefined)
    );

    if (Object.entries(index).find((i) => i[1] !== undefined) === undefined) {
      setIsShowingAll(true);
    }
  }, [index]);

  function assignIndex(i, value) {
    setIndex({
      ...index,
      [i]: value,
    });
  }

  function setFilterOption(option, event) {
    assignIndex(event.target.attributes.index.value, option);
    setIsShowingAll(false);
  }

  function resetFilterOption(event) {
    assignIndex(event.target.attributes.index.value, undefined);
  }

  function toggleNewFilters() {
    setIsNewFiltersOpen(!isNewFiltersOpen);
  }

  return (
    <>
      <h2>Query Builder</h2>

      <section
        className={`border border-secondary p-3 ${
          isNewFiltersOpen && isAnyFiltersIdle && "pb-0"
        }`}
      >
        <h5>Events summary</h5>

        <Row>
          <Col>
            <Button
              className="border border-secondary me-2"
              variant={`${isShowingAll ? "success" : "outline-light"}`}
              onClick={resetFilters}
            >
              <span className={`${isShowingAll || "text-dark"}`}>
                All events
              </span>
            </Button>

            {filters.map((filter, filterIndex) => {
              if (index[filterIndex] !== undefined) {
                return (
                  <ButtonGroup key={filterIndex} className="me-2">
                    <Button
                      className="border border-secondary"
                      variant="outline-light"
                    >
                      <span className="text-dark">
                        {filter.name}: {filter.options[index[filterIndex]]}
                      </span>
                    </Button>
                    <Button
                      className="border border-secondary"
                      variant="outline-light"
                      onClick={resetFilterOption}
                      index={filterIndex}
                    >
                      <span
                        className="small material-symbols-outlined text-dark"
                        index={filterIndex}
                      >
                        <strong index={filterIndex}>close</strong>
                      </span>
                    </Button>
                  </ButtonGroup>
                );
              }
              return null;
            })}

            <div className="ms-3 me-4 vr"></div>

            {isAnyFiltersIdle && (
              <Button
                className="border border-secondary me-2"
                variant={`${isNewFiltersOpen ? "secondary" : "outline-light"}`}
                onClick={toggleNewFilters}
              >
                <span className={`${isNewFiltersOpen || "text-dark"}`}>
                  New filter
                </span>
                &nbsp;
                <span
                  className={`small material-symbols-outlined ${
                    isNewFiltersOpen || "text-dark"
                  }`}
                >
                  <strong>{`${
                    isNewFiltersOpen
                      ? "keyboard_arrow_up"
                      : "keyboard_arrow_down"
                  }`}</strong>
                </span>
              </Button>
            )}

            {isAnyFiltersIdle || (
              <Button variant="link link-danger ps-0" onClick={resetFilters}>
                <span>Reset filters</span>
              </Button>
            )}
          </Col>
        </Row>

        {isNewFiltersOpen && isAnyFiltersIdle && (
          <Row className="bg-light mt-3 py-3">
            <Col>
              <h5>Add an event filter</h5>
              <p>
                <small>
                  Select a filter below to add it to the event summary
                </small>
              </p>

              {filters.map((filter, filterIndex) => {
                if (index[filterIndex] === undefined) {
                  return (
                    <DropdownButton
                      className="d-inline m-1"
                      title={filter.name}
                      key={filterIndex}
                      variant="secondary"
                      onSelect={setFilterOption}
                    >
                      {filter.options.map((option, optionIndex) => (
                        <Dropdown.Item
                          key={optionIndex}
                          eventKey={optionIndex}
                          index={filterIndex}
                        >
                          {option}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  );
                }
                return null;
              })}
            </Col>
          </Row>
        )}
      </section>

      <section className="border border-secondary p-3 mt-3 bg-light">
        <Row>
          <Col>
            <h5>Events list</h5>
            <p className="align-center">
              Showing results for{" "}
              <strong>
                {isShowingAll ? (
                  <span>all events</span>
                ) : (
                  filters.map((filter, filterIndex) => {
                    if (index[filterIndex] !== undefined) {
                      return (
                        <span key={filterIndex}>
                          {filter.options[index[filterIndex]]}, &nbsp;
                        </span>
                      );
                    }
                    return null;
                  })
                )}
                .
              </strong>
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default QueryBuilder;
