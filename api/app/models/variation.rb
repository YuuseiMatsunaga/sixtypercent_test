class Variation < ApplicationRecord
    enum size: {S: 1, M: 2, L: 3, LL: 4, O: 5}
end