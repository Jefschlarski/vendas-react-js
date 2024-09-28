import * as S from './styles';

const Table = ({ data, columns, actions, idField = 'id' }) => {
    return (
      <S.TableContainer>
        <S.StyledTable>
          <thead>
            <tr>
              {columns.map((col) => (
                <S.TableHeader key={col.field}>{col.label}</S.TableHeader>
              ))}
              {actions && <S.TableHeader>Ações</S.TableHeader>}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <S.TableRow key={item[idField]}>
                {columns.map((col) => (
                  <S.TableCell key={col.field}>{item[col.field]}</S.TableCell>
                ))}
                {actions && (
                  <S.TableCell>
                    {actions.map((action, idx) => (
                      <S.ActionButton key={idx} onClick={() => action.method(item[idField])}>
                        {action.icon ? <action.icon /> : action.label}
                      </S.ActionButton>
                    ))}
                  </S.TableCell>
                )}
              </S.TableRow>
            ))}
          </tbody>
        </S.StyledTable>
      </S.TableContainer>
    );
  };
  
  export default Table;
