import React from "react";
import ButtonOutline from "./ButtonOutline";

const VarianProduct = ({ dataVarian, dataUkuran }) => {
    return (
        <section>
            <div>

                <p className="text-md py-5">
                    <strong>Pilih varian:</strong>
                    &nbsp;Inter M2 Pro
                </p>
                <div className="flex gap-2">
                    {dataVarian.map((item) => (
                        <ButtonOutline
                            className="text-green-500 bg-green-100"
                            buttonName={item}
                        />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-md py-5">
                    <strong>Pilih ukuran:</strong>
                    &nbsp;16/1TB Silver
                </p>
                <div className="flex flex-wrap gap-1">
                    {dataUkuran.map((item) => (

                        <ButtonOutline
                            className="text-green-500 bg-green-100"
                            buttonName={item}
                        />
                    ))}
                </div>
                <hr className="my-5" />
            </div>
        </section>
    );
};

export default VarianProduct;
