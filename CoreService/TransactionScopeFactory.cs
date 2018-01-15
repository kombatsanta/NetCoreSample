using System;
using System.Collections.Generic;
using System.Text;
using System.Transactions;

namespace CoreService
{
    public static class TransactionScopeFactory
    {
        public static TransactionScope Create(TransactionScopeOption scopeOption = TransactionScopeOption.Required, IsolationLevel isolationLevel = IsolationLevel.ReadCommitted)
        {
            var options = new TransactionOptions
            {
                IsolationLevel = isolationLevel,
                Timeout = TransactionManager.MaximumTimeout
            };

            return new TransactionScope(scopeOption, options);
        }
    }
}
