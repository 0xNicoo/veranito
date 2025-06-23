export const Count = ({ count }) => {
    return (
        <div className="mt-4 p-3 bg-[#c0c0c0] inset-border">
          <p className="text-sm mt-1">
            <strong>📊 Total de Campeonatos:</strong> {count}
          </p>
        </div>
    );
};  